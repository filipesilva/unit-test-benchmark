import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8092Component } from './my-comp-8092.component';

describe('MyComp8092Component', () => {
  let component: MyComp8092Component;
  let fixture: ComponentFixture<MyComp8092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
