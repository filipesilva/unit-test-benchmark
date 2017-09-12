import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp750Component } from './my-comp-750.component';

describe('MyComp750Component', () => {
  let component: MyComp750Component;
  let fixture: ComponentFixture<MyComp750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
