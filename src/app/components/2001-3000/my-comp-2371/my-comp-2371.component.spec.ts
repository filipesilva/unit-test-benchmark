import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2371Component } from './my-comp-2371.component';

describe('MyComp2371Component', () => {
  let component: MyComp2371Component;
  let fixture: ComponentFixture<MyComp2371Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2371Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2371Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
