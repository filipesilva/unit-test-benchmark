import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8851Component } from './my-comp-8851.component';

describe('MyComp8851Component', () => {
  let component: MyComp8851Component;
  let fixture: ComponentFixture<MyComp8851Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8851Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8851Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
