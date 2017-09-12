import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5664Component } from './my-comp-5664.component';

describe('MyComp5664Component', () => {
  let component: MyComp5664Component;
  let fixture: ComponentFixture<MyComp5664Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5664Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5664Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
