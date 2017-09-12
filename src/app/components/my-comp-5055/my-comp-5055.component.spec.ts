import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5055Component } from './my-comp-5055.component';

describe('MyComp5055Component', () => {
  let component: MyComp5055Component;
  let fixture: ComponentFixture<MyComp5055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
