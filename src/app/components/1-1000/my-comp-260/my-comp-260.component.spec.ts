import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp260Component } from './my-comp-260.component';

describe('MyComp260Component', () => {
  let component: MyComp260Component;
  let fixture: ComponentFixture<MyComp260Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp260Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
