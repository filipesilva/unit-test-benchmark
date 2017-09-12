import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8474Component } from './my-comp-8474.component';

describe('MyComp8474Component', () => {
  let component: MyComp8474Component;
  let fixture: ComponentFixture<MyComp8474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
