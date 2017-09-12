import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp979Component } from './my-comp-979.component';

describe('MyComp979Component', () => {
  let component: MyComp979Component;
  let fixture: ComponentFixture<MyComp979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
