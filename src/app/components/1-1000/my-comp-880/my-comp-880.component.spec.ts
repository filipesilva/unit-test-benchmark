import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp880Component } from './my-comp-880.component';

describe('MyComp880Component', () => {
  let component: MyComp880Component;
  let fixture: ComponentFixture<MyComp880Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp880Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp880Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
