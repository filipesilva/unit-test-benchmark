import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4553Component } from './my-comp-4553.component';

describe('MyComp4553Component', () => {
  let component: MyComp4553Component;
  let fixture: ComponentFixture<MyComp4553Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4553Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4553Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
