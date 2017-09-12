import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3436Component } from './my-comp-3436.component';

describe('MyComp3436Component', () => {
  let component: MyComp3436Component;
  let fixture: ComponentFixture<MyComp3436Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3436Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3436Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
