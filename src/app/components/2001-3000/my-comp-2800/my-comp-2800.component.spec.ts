import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2800Component } from './my-comp-2800.component';

describe('MyComp2800Component', () => {
  let component: MyComp2800Component;
  let fixture: ComponentFixture<MyComp2800Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2800Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2800Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
