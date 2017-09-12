import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3974Component } from './my-comp-3974.component';

describe('MyComp3974Component', () => {
  let component: MyComp3974Component;
  let fixture: ComponentFixture<MyComp3974Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3974Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3974Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
