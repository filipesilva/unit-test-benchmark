import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3149Component } from './my-comp-3149.component';

describe('MyComp3149Component', () => {
  let component: MyComp3149Component;
  let fixture: ComponentFixture<MyComp3149Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3149Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3149Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
