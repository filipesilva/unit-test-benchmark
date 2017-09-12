import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8242Component } from './my-comp-8242.component';

describe('MyComp8242Component', () => {
  let component: MyComp8242Component;
  let fixture: ComponentFixture<MyComp8242Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8242Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
