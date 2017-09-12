import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8765Component } from './my-comp-8765.component';

describe('MyComp8765Component', () => {
  let component: MyComp8765Component;
  let fixture: ComponentFixture<MyComp8765Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8765Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8765Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
