import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8048Component } from './my-comp-8048.component';

describe('MyComp8048Component', () => {
  let component: MyComp8048Component;
  let fixture: ComponentFixture<MyComp8048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
