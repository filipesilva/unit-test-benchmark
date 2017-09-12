import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp545Component } from './my-comp-545.component';

describe('MyComp545Component', () => {
  let component: MyComp545Component;
  let fixture: ComponentFixture<MyComp545Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp545Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp545Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
