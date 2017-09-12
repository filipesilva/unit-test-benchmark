import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4221Component } from './my-comp-4221.component';

describe('MyComp4221Component', () => {
  let component: MyComp4221Component;
  let fixture: ComponentFixture<MyComp4221Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4221Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4221Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
