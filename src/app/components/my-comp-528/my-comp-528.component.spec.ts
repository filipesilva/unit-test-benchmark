import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp528Component } from './my-comp-528.component';

describe('MyComp528Component', () => {
  let component: MyComp528Component;
  let fixture: ComponentFixture<MyComp528Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp528Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp528Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
