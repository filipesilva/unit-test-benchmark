import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3990Component } from './my-comp-3990.component';

describe('MyComp3990Component', () => {
  let component: MyComp3990Component;
  let fixture: ComponentFixture<MyComp3990Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3990Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3990Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
