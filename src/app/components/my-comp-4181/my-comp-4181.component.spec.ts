import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4181Component } from './my-comp-4181.component';

describe('MyComp4181Component', () => {
  let component: MyComp4181Component;
  let fixture: ComponentFixture<MyComp4181Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4181Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4181Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
