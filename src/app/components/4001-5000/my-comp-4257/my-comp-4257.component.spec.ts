import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4257Component } from './my-comp-4257.component';

describe('MyComp4257Component', () => {
  let component: MyComp4257Component;
  let fixture: ComponentFixture<MyComp4257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
