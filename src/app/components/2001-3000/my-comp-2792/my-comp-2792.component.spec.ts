import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2792Component } from './my-comp-2792.component';

describe('MyComp2792Component', () => {
  let component: MyComp2792Component;
  let fixture: ComponentFixture<MyComp2792Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2792Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2792Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
