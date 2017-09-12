import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp342Component } from './my-comp-342.component';

describe('MyComp342Component', () => {
  let component: MyComp342Component;
  let fixture: ComponentFixture<MyComp342Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp342Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp342Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
