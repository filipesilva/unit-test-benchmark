import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3308Component } from './my-comp-3308.component';

describe('MyComp3308Component', () => {
  let component: MyComp3308Component;
  let fixture: ComponentFixture<MyComp3308Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3308Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3308Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
