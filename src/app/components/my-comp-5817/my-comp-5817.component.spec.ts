import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5817Component } from './my-comp-5817.component';

describe('MyComp5817Component', () => {
  let component: MyComp5817Component;
  let fixture: ComponentFixture<MyComp5817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
