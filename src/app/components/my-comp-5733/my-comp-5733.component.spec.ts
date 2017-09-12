import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5733Component } from './my-comp-5733.component';

describe('MyComp5733Component', () => {
  let component: MyComp5733Component;
  let fixture: ComponentFixture<MyComp5733Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5733Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5733Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
