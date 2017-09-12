import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3300Component } from './my-comp-3300.component';

describe('MyComp3300Component', () => {
  let component: MyComp3300Component;
  let fixture: ComponentFixture<MyComp3300Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3300Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3300Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
