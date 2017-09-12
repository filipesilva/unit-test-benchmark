import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3979Component } from './my-comp-3979.component';

describe('MyComp3979Component', () => {
  let component: MyComp3979Component;
  let fixture: ComponentFixture<MyComp3979Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3979Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3979Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
