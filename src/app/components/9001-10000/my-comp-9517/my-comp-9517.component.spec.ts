import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9517Component } from './my-comp-9517.component';

describe('MyComp9517Component', () => {
  let component: MyComp9517Component;
  let fixture: ComponentFixture<MyComp9517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
