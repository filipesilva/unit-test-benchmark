import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp855Component } from './my-comp-855.component';

describe('MyComp855Component', () => {
  let component: MyComp855Component;
  let fixture: ComponentFixture<MyComp855Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp855Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp855Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
