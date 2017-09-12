import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5979Component } from './my-comp-5979.component';

describe('MyComp5979Component', () => {
  let component: MyComp5979Component;
  let fixture: ComponentFixture<MyComp5979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
