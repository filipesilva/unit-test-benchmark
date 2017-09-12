import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8289Component } from './my-comp-8289.component';

describe('MyComp8289Component', () => {
  let component: MyComp8289Component;
  let fixture: ComponentFixture<MyComp8289Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8289Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8289Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
