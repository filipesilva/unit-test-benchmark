import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8185Component } from './my-comp-8185.component';

describe('MyComp8185Component', () => {
  let component: MyComp8185Component;
  let fixture: ComponentFixture<MyComp8185Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8185Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
