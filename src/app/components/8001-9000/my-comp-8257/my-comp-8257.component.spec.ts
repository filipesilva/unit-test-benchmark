import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp8257Component } from './my-comp-8257.component';

describe('MyComp8257Component', () => {
  let component: MyComp8257Component;
  let fixture: ComponentFixture<MyComp8257Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp8257Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp8257Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
