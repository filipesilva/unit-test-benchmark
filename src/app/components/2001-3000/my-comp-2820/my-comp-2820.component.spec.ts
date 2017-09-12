import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2820Component } from './my-comp-2820.component';

describe('MyComp2820Component', () => {
  let component: MyComp2820Component;
  let fixture: ComponentFixture<MyComp2820Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2820Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2820Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
