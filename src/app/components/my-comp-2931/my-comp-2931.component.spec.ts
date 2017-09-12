import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2931Component } from './my-comp-2931.component';

describe('MyComp2931Component', () => {
  let component: MyComp2931Component;
  let fixture: ComponentFixture<MyComp2931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
