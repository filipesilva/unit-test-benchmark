import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5463Component } from './my-comp-5463.component';

describe('MyComp5463Component', () => {
  let component: MyComp5463Component;
  let fixture: ComponentFixture<MyComp5463Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5463Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5463Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
