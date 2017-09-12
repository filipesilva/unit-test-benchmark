import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2106Component } from './my-comp-2106.component';

describe('MyComp2106Component', () => {
  let component: MyComp2106Component;
  let fixture: ComponentFixture<MyComp2106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
