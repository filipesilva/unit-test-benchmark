import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8880Component } from './my-comp-8880.component';

describe('MyComp8880Component', () => {
  let component: MyComp8880Component;
  let fixture: ComponentFixture<MyComp8880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
