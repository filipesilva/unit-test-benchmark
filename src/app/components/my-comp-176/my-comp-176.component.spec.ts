import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp176Component } from './my-comp-176.component';

describe('MyComp176Component', () => {
  let component: MyComp176Component;
  let fixture: ComponentFixture<MyComp176Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp176Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp176Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
