import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3830Component } from './my-comp-3830.component';

describe('MyComp3830Component', () => {
  let component: MyComp3830Component;
  let fixture: ComponentFixture<MyComp3830Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3830Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3830Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
