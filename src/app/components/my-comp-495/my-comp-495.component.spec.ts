import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp495Component } from './my-comp-495.component';

describe('MyComp495Component', () => {
  let component: MyComp495Component;
  let fixture: ComponentFixture<MyComp495Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp495Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp495Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
