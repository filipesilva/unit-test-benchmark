import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3654Component } from './my-comp-3654.component';

describe('MyComp3654Component', () => {
  let component: MyComp3654Component;
  let fixture: ComponentFixture<MyComp3654Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3654Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3654Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
