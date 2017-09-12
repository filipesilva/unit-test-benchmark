import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp921Component } from './my-comp-921.component';

describe('MyComp921Component', () => {
  let component: MyComp921Component;
  let fixture: ComponentFixture<MyComp921Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp921Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
