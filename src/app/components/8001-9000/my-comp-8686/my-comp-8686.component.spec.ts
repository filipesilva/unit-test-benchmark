import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8686Component } from './my-comp-8686.component';

describe('MyComp8686Component', () => {
  let component: MyComp8686Component;
  let fixture: ComponentFixture<MyComp8686Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8686Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8686Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
