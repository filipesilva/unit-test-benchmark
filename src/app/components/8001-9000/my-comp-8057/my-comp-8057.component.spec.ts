import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8057Component } from './my-comp-8057.component';

describe('MyComp8057Component', () => {
  let component: MyComp8057Component;
  let fixture: ComponentFixture<MyComp8057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
