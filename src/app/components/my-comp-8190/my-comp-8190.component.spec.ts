import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8190Component } from './my-comp-8190.component';

describe('MyComp8190Component', () => {
  let component: MyComp8190Component;
  let fixture: ComponentFixture<MyComp8190Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8190Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
