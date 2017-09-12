import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4821Component } from './my-comp-4821.component';

describe('MyComp4821Component', () => {
  let component: MyComp4821Component;
  let fixture: ComponentFixture<MyComp4821Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4821Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4821Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
