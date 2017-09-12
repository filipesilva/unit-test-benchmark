import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8367Component } from './my-comp-8367.component';

describe('MyComp8367Component', () => {
  let component: MyComp8367Component;
  let fixture: ComponentFixture<MyComp8367Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8367Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8367Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
