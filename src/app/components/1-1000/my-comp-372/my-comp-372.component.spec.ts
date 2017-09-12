import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp372Component } from './my-comp-372.component';

describe('MyComp372Component', () => {
  let component: MyComp372Component;
  let fixture: ComponentFixture<MyComp372Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp372Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp372Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
